import React, { useState , useEffect} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [image, setImage] = useState(null);
  // const [product, setProduct] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
 
  };
    useEffect(() => {
      const getProduct = async () => {
        try {
          const response = await fetch(`http://localhost:5000/update/${id}`);
          const data = await response.json();
          // setProduct(data);
          setName(data.name);
          setPrice(data.price);
          setCategoryId(data.categoryId);
        } catch (err) {
          console.log(err);
        }
      };
        getProduct();
    }, [id]);

  const submitUpdateProduct = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          image,
          name,
          price,
          categoryId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: token,
        },
        
      });
      const data = await response.json();
      console.log(data, 'data');
      navigate('/products'); // add this line to navigate to the 'products' route
    } catch (err) {
      console.log(err);
    }
  
  };
 

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Update Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file"  onChange={handleImageChange} />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="text"
            placeholder="Product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <input
            type="text"
            placeholder="Product category"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          />
        </div>
        <button className="addProductButton" onClick={()=>submitUpdateProduct(id)}>
          Update
        </button>
      </form>
      <Link to="/products"><p>go to products</p></Link>
    </div>
  );
  }

export default UpdateProduct;



