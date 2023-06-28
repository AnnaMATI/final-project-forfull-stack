import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { useState , useEffect} from 'react';
import {FaYoutube,FaFacebook,FaLinkedin, FaInstagram} from 'react-icons/fa';



export default function DataTable() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
      fetch('http://localhost:5000/products')
      .then(res=>res.json())
      .then(data=> setProducts(data))

  }, [])
  const navigate = useNavigate();
  console.log(products)

 const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'name', width: 130 },
    { field: 'price', headerName: 'price', width: 130 },
    { field: 'categoryId', headerName: 'categoryId', width: 130 },
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      renderCell: (params) => (
        <img src={params.value} alt="Product" style={{ width: '100%' }} />
      ),
    }, 
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={`/updateprod/${params.id}`}>
          <EditIcon
          className="userListDelete"
         />
</Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => submitDeleteProduct(params.id)} 
            />
          </>
          
        );
      }
    },
   
  ];

  const submitDeleteProduct = async (id) => {
    const token = localStorage.getItem('token')
    try {
      const response = await fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": token
        }
      })
      const data = await response.json()
      console.log(data, 'data')
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch(err){
      console.log(err)
    }
  };

  return (

    <div >
       <div className='product-container' >
       <div className="product">
      <h1 className="producttitle">Products</h1>
      <Link className="productAddButton" to="/prod">
        <button >Create</button>
      </Link>
      </div>

      <ul className='box'>
  {products.map((product) => (
    <li className='imgcontainer' key={product.id}>
      <img className='images'  src={`http://localhost:5000/images/${product.image}`} alt='logo'/>
      {product.name} - ${product.price}
      
    </li>
  ))}
</ul>
</div>

        <div className="footer">
            <div className="col-3">
                <h4>Find us</h4>
                <div className="social-icons">
                    <FaYoutube className='social-icon'/>
                    <FaFacebook className='social-icon'/>
                    <FaLinkedin className='social-icon'/>
                    <FaInstagram className='social-icon'/>
                </div>
                
            </div>

        </div>
  
    </div>
     
  );
}

