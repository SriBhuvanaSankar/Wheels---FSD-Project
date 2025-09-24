import React, { useState, useEffect} from 'react';
import './Accessories.css';

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [sortAsc, setSortAsc] = useState(true);
    const [editingAccessory, setEditingAccessory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [accessoriesPerPage] = useState(5); // Items per page

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    // Handle adding a new accessory
    const handleAddAccessory = (e) => {
        e.preventDefault();
        const newAccessory = {
            id: accessories.length + 1,
            name,
            price,
            description,
            image,
        };

        setAccessories([...accessories, newAccessory]);
        resetForm();
    };

    // Handle accessory edit
    const handleEditAccessory = (id) => {
        const accessory = accessories.find((item) => item.id === id);
        setEditingAccessory(id);
        setName(accessory.name);
        setPrice(accessory.price);
        setDescription(accessory.description);
        setImage(accessory.image);
    };

    // Save edited accessory
    const handleSaveEdit = (e) => {
        e.preventDefault();
        const updatedAccessories = accessories.map((item) =>
            item.id === editingAccessory
                ? { ...item, name, price, description, image }
                : item
        );
        setAccessories(updatedAccessories);
        resetForm();
        setEditingAccessory(null);
    };

    // Handle delete accessory
    const handleDeleteAccessory = (id) => {
        const updatedAccessories = accessories.filter((item) => item.id !== id);
        setAccessories(updatedAccessories);
    };

    // Sort accessories by price
    const handleSortByPrice = () => {
        const sortedAccessories = [...accessories].sort((a, b) => (sortAsc ? a.price - b.price : b.price - a.price));
        setAccessories(sortedAccessories);
        setSortAsc(!sortAsc);
    };

    // Reset form after adding or editing
    const resetForm = () => {
        setName('');
        setPrice('');
        setDescription('');
        setImage(null);
    };

    // Pagination logic
    const indexOfLastAccessory = currentPage * accessoriesPerPage;
    const indexOfFirstAccessory = indexOfLastAccessory - accessoriesPerPage;
    const currentAccessories = accessories.slice(indexOfFirstAccessory, indexOfLastAccessory);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="accessories-container">
            <h2>{editingAccessory ? 'Edit Accessory' : 'Add Car Accessories for Sale'}</h2>
            <form className="accessory-form" onSubmit={editingAccessory ? handleSaveEdit : handleAddAccessory}>
                <div className="form-group">
                    <label htmlFor="name">Accessory Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Upload Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </div>
                <button type="submit" className="btn btn-primary">{editingAccessory ? 'Save Changes' : 'Add Accessory'}</button>
            </form>

            <h3>Available Accessories</h3>
            {accessories.length > 0 ? (
                <>
                    <button onClick={handleSortByPrice}>
                        Sort by Price {sortAsc ? 'Ascending' : 'Descending'}
                    </button>
                    <table className="accessories-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentAccessories.map((accessory) => (
                                <tr key={accessory.id}>
                                    <td>
                                        {accessory.image && (
                                            <img src={accessory.image} alt={accessory.name} className="accessory-image" />
                                        )}
                                    </td>
                                    <td>{accessory.name}</td>
                                    <td>${accessory.price}</td>
                                    <td>{accessory.description}</td>
                                    <td>
                                        <button onClick={() => handleEditAccessory(accessory.id)}>Edit</button>
                                        <button onClick={() => handleDeleteAccessory(accessory.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        {Array.from({ length: Math.ceil(accessories.length / accessoriesPerPage) }, (_, i) => (
                            <button key={i} onClick={() => paginate(i + 1)}>
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <p>No accessories available yet.</p>
            )}
        </div>
    );
};

export default Accessories;
