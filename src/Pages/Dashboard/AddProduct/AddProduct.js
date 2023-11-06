import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth/useAuth";
import "./AddProduct.css";
import Loading from "../../../component/Loading";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const { allContext } = useAuth();
  const { ColorButton } = allContext;

  const onSubmit = (data) => {
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_UPLOAD_TOKEN}`;

    const formData = new FormData();
    formData.append("image", data.img[0]);
    // formData.append("name", data.name);
    // formData.append("description", data.description);
    // formData.append("price", data.price);
    const proceed = window.confirm("Are You Sure, You Want To Add Product");
    if (proceed) {
      setLoading(true);
      axios.post(imageHostingUrl, formData).then((imgRes) => {
        if (imgRes.data.success) {
          axios
            .post(`${process.env.REACT_APP_API_BASE_URL}/products`, {
              ...data,
              img: imgRes.data.data.display_url,
            })
            .then((res) => {
              if (res.data.insertedId) {
                setLoading(false);
                alert("Product Successfully Added");
                reset();
              }
            });
        }
      });
    }
  };
  return (
    <div className="banner-addProduct add-products text-center">
      <div className="banner-as">
        <h1>Please Add New Product</h1>
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true })} placeholder="Name" />
          <textarea
            className="massage"
            {...register("description", { required: true })}
            placeholder="Description"
          />
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Price"
          />
          <input
            style={{ border: "2px solid #EC9C31" }}
            type="file"
            accept="image/*"
            {...register("img", { required: true })}
          />
          <ColorButton
            sx={{ width: "100%", mt: 3 }}
            type="submit"
            variant="contained"
          >
            {loading ? (
              <Loading my={"none"} size={25} color="white" />
            ) : (
              "ADD PRODUCT"
            )}
          </ColorButton>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
