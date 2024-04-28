const AddCoffe = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const categori = form.categori.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, test, categori, details, photo}
        console.log(newCoffee);


    }
    return (
        <div className="container mx-auto bg-[#F4F3F0] p-24 my-12">
            <h2 className="text-6xl text-center mb-8 font-extrabold">Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form row */}
                <div className="md:flex gap-6 mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <h4>Coffee Name</h4>
                        </label>
                        <label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Coffee Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <h4>Available Quantity</h4>
                        </label>
                        <label>
                            <input
                                type="text"
                                name="quantity"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>{/* form row */}
                <div className="md:flex gap-6 mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <h4>Supplier</h4>
                        </label>
                        <label>
                            <input
                                type="text"
                                name="supplier"
                                placeholder="supplier Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <h4>Test</h4>
                        </label>
                        <label>
                            <input
                                type="text"
                                name="test"
                                placeholder="Test"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex gap-6 mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <h4>Categori</h4>
                        </label>
                        <label>
                            <input
                                type="text"
                                name="categori"
                                placeholder="Categori"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <h4>Details</h4>
                        </label>
                        <label>
                            <input
                                type="text"
                                name="details"
                                placeholder="Details"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="gap-6 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <h4>Photo</h4>
                        </label>
                        <label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Enter Photo URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C]" />
            </form>
        </div>
    );
};

export default AddCoffe;
