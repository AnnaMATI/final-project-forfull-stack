import { DataGrid } from '@mui/x-data-grid';
import "./categories.css";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { useState , useEffect} from 'react';
import EditIcon from '@mui/icons-material/Edit';


export default function DataTable() {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
      fetch('http://localhost:5000/category/:id')
      .then(res=>res.json())
      .then(data=>setCategories(data))
  }, [])

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  
    {field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
         <Link to={`/updatecategory/:id/${params.id}`}>
          <EditIcon
          className="edit"
         />
</Link>
           <DeleteOutline
  onClick={() => submitDeleteCategory(params.id)} 
/>
  </>
      );
      }}
];
const submitDeleteCategory = async (id) => {
  const token = localStorage.getItem('token')
  try {
    const response = await fetch(`http://localhost:5000/deletecategory/:id`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": token
      }
    })
    const data = await response.json()
    console.log(data, 'data')
    // Filter the deleted product from the products state
    setCategories((prevCategories) => prevCategories.filter((category) => category.id !== id));
  } catch(err){
    console.log(err)
  }
};
return {}
//     <div style={{ height: 400, width: '98%' }}>
//       <div className="productitle">
//          <h1 className="productTitle">Categories</h1>
//         <Link to="/category">
//           <button className="productAddButton">Create</button>
//         </Link>
//         {/* </div>
//         <ul>
//   {category.map((categories) => (
//     <li key={categories.id}>
//       {categories.name}
//     </li>
//   ))}
// </ul>
//     </div> */}
//   );
}
