import { useState, useEffect } from 'react';
import { getSuppliers } from './productService';

export function useSuppliers() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      setLoading(true);
      const data = await getSuppliers();
      setSuppliers(data);
    } catch (error) {
      console.error('Ошибка при загрузке поставщиков:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    suppliers,
    loading,
    refreshSuppliers: fetchSuppliers
  };
}
