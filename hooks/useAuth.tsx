import { BELLA_TOKEN } from "@/api/constants";
import { login, register } from "@/api/paths";
import useBellaFetcher from "@/api/useBellaFetcher";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { LoginUser, RegisterUser, TokenValidated } from "./@types/Auth.type";
import useAuthGoogle from "./useAuthGoogle";
import useStorage from "./useStorage";

const useAuth = () => {
  const { fetcher } = useBellaFetcher();
  const { setItem, getItem, removeItem } = useStorage(BELLA_TOKEN);
  const [token, setToken] = useState<string | null>(null);
  const { signIn: signInGoogle } = useAuthGoogle();

  useEffect(() => {
    const getToken = async () => {
      const token = await getItem();
      setToken(token);
    }

    getToken();
  }, []);

  const options = (data?: unknown) => {
    const headers: HeadersInit = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    return {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    }
  }

  const loginWithGoogle = async () => {

    const token = await signInGoogle();

    if (token) {
      const response = await fetcher<TokenValidated>(login, options({ token }))
      if (response.ok) {
        const { data } = await response.json();
        await setItem(data.token);
      }
    }

    return token;
  }

  const registerUser = async (data: RegisterUser) => {
    const response = await fetcher(register, options(data))

    if (response.ok) {
      const { data } = await response.json();
      await setItem(data.token);
    }

    return response;
  }

  const validateTokenUser = async () => {
    const token = await getItem();
    setToken(token);

    return token;
  }

  const loginUser = async (data: LoginUser) => {
    console.log("🔐 LOGIN USER START:", data);

    try {
      const response = await fetcher<TokenValidated>(login, options(data));
      console.log("✅ LOGIN RESPONSE RECEIVED:", response.status, response.statusText);

      // Verificar se a resposta tem conteúdo
      const contentType = response.headers.get('content-type');
      console.log("📄 CONTENT-TYPE:", contentType);

      if (response.status === 403) {
        console.log("🚫 LOGIN FAILED - 403 Forbidden");
        return false;
      }

      // Verificar se há conteúdo para parsear
      if (!contentType || !contentType.includes('application/json')) {
        console.log("⚠️ NO JSON CONTENT - Empty response or non-JSON content");
        return response.ok;
      }

      console.log("🔄 PARSING JSON...");
      const responseJson = await response.json();
      console.log("✅ JSON PARSED:", responseJson);

      if (response.ok) {
        await setItem(responseJson.data.token);
        console.log("💾 TOKEN SAVED");
      }

      return response.ok;
    } catch (error) {
      console.error("❌ LOGIN ERROR:", error);
      return false;
    }
  }

  const logoutUser = async () => {
    await removeItem();
    router.push('/welcome');
  }

  return {
    validateTokenUser,
    registerUser,
    loginUser,
    logoutUser,
    token,
    loginWithGoogle,
  };
}

export default useAuth;