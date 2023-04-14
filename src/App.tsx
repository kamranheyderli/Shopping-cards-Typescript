import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "./model";
import Card from "./Components/Card";
import Loading from "./Components/HOC/Loading";


function App() {

  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getProduct() {
    try {
      setLoading(true);
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
      setLoading(false)
    } catch {
      console.log("error");
    }
  }


  useEffect(() => {
    getProduct()
  }, [])




  return (
    <div className="grid grid-cols-4  gap-5 mt-10 ">
      {
        loading ? <Loading />
          : data.map((item) => (
            <Card key={item.id} data={item} />
          )

          )
      }
    </div>
  );
}

export default App;
