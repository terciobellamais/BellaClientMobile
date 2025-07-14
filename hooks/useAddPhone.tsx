import useBellaFetcher from "@/api/useBellaFetcher";
import { isPhoneVerified, sendCode, verifyCode } from "@/api/paths";

const useAddPhone = () => {
  const { fetcher } = useBellaFetcher();

  const handleSendCode = async (phoneNumber: string) => {
    const response = await fetcher(sendCode, {
      method: 'POST',
      body: JSON.stringify({ phoneNumber }),
    });

    return await response.json();
  };  

  const handleVerifyCode = async (phoneNumber: string, code: string) => {
    const response = await fetcher(verifyCode, {
      method: 'POST',
      body: JSON.stringify({ phoneNumber, code }),
    });

    return await response.json();
  };

  const handleIsPhoneVerified = async () => {
    const response = await fetcher(isPhoneVerified, {
      method: 'GET',
    });

    return await response.json();
  };

  return { handleSendCode, handleVerifyCode, handleIsPhoneVerified };
};

export default useAddPhone;