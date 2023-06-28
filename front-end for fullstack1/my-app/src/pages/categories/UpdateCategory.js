import React from 'react'
import { useState,useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'


export default function UpdateCategory() {
  const [name, setName] = useState('');
  const [categories, setCategory] = useState('');
  const [error, setError] = useState(null);
  const { id } = useParams();

  const submitUpdateCategories = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`http://localhost:5000/updatecategory/:id`, {
        method: 'PUT',
        body: JSON.stringify({
          name,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to update category');
      }

      const data = await response.json();
      console.log(data, 'data');
    } catch (err) {
      console.log(err);
      setError(err.message);
    }

    setName('');
  };

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetch(`http://localhost:5000/category/${id}`);
        const data = await response.json();
        setCategory(data);
        setName(data.name);
      } catch (err) {
        console.log(err);
      }
    };

    getCategory();
  }, [id]);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Category</h1>
      {error && <p className="error">{error}</p>}
      <form className="addProductForm">
        <div className="addProductItem">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="dresses"
          />
        </div>
        <button className="addProductButton" onClick={submitUpdateCategories}>
          Update
        </button>
      </form>
      <Link to="/categories">
        <p>go to categories</p>
      </Link>
    </div>
  );
}