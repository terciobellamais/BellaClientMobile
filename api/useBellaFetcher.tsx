import useStorage from "@/hooks/useStorage";
import { useEffect, useState } from "react";
import { BELLA_TOKEN } from "./constants";

/**
 * Fetcher function to fetch data from the API
 * @returns fetcher function
 */
const useBellaFetcher = () => {
  const { getItem } = useStorage(BELLA_TOKEN);

  const fetcher = async <T,>(url: string, options: RequestInit = {}) => {
    const token = await getItem();

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...options.headers,
    };

    const requestOptions = {
      ...options,
      headers,
    };

    console.log('🚀 FETCH REQUEST:', {
      url,
      method: requestOptions.method || 'GET',
      headers,
      body: requestOptions.body
    });

    try {
      const response = await fetch(url, requestOptions);

      console.log('📡 FETCH RESPONSE:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries())
      });

      return response as Response & T;
    } catch (error) {
      console.error('❌ FETCH ERROR:', error);
      throw error;
    }
  };

  return { fetcher };
};

export default useBellaFetcher;
