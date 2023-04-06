import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Products from "./Products";

const Container = styled.div`
     width: 90%;
     margin: auto;
`;

const ProductList = () => {
     const location = useLocation();
     const category = location.pathname.split("/")[2];

     const [filters, setFilters] = useState({});
     const [sort, setSort] = useState("newest");

     const handleFilters = (e) => {
          const value = e.target.value;
          setFilters({
               ...filters,
               [e.target.name]: value.toLowerCase(),
          });
     };
     // console.log("filters:", filters);

     return (
          <Container>
               <Products category={category} filters={filters} sort={sort} />
          </Container>
     );
};

export default ProductList;
