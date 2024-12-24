'use client';
import { useEffect, useState } from "react";
import {columns} from "../../components/ui/columns"

export interface cryptoType {
  name: string;
  percentage_change: string;
  price: string;
}

export default function CryptoPage() {
  const [cryptoData, setCryptoData] = useState<cryptoType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://web-scraper-for-crypto.onrender.com/crypto");
        const data = await response.json();
        setCryptoData(data[0]); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="bg-black text-white w-full h-full">
    <div className="w-full text-2xl font-semibold h-1/12 bg-black/50 backdrop-blur-md p-4 text-white fixed">
        Get Crypto
    </div>
      <div className="w-full h-full p-4 pt-20">
        {cryptoData.length > 0 ? (
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-zinc-700x">
                <th className="px-4 py-2 text-lg">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Change</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{crypto.name}</td>
                  <td className="border px-4 py-2">{crypto.price}</td>
                  <td className="border px-4 py-2">{crypto.percentage_change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}