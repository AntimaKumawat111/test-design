import React, { useState } from "react";
import "./App.scss";
import { Menu } from "antd";
import { Button } from "antd";
import { Select, Space } from "antd";
import { Card, List } from "antd";
import {
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import LogoutIcon from "@mui/icons-material/Logout";
import LayersIcon from '@mui/icons-material/Layers';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ListAltIcon from '@mui/icons-material/ListAlt';

const items = [
  { label: "Menu", id: "menu", icon: <MenuOutlined /> },
  { label: "Categorias", id: "categorias" },
  { label: "Modificadores", id: "modificadors", icon: <LayersIcon /> },
  { label: "Impuestos", id: "impuestos", icon: <SettingOutlined /> },
  { label: "Ordenes", id: "ordenes", icon: <ListAltIcon /> },
  { label: "Horarios", id: "horarios", icon: <AccessTimeFilledIcon /> },
  { label: "Log Out", id: "log_out", icon: <LogoutIcon /> },
];

const FileUpload = () => {
  const [fileName, setFileName] = useState(""); // To store the file name (optional)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Update the file name state when a file is selected
    }
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const data = [
    { content: 'Papas "Ei Hambriento"(Double Corne)' },
    { content: 'Papas "Ei Esmallao"(Triple Corne)' },
    { content: "Papas Regulares" },
  ];

  return (
    <div >
      <div className="left_box">
        <Menu
        className="custom-menu"
          style={{ width: "auto", height: "100%" }} // Ensure menu fills the height of left_box
          mode="inline"
          items={items}
        />
      </div>

      <div className="right_div">
        <h2>Gestionar Categorías</h2>

        <div className="select_box">
          <Space wrap className="select_div">
            <Select
              defaultValue="lucy"
              style={{ width: "100%" }}
              onChange={handleChange}
              options={[
                { value: "Cafe", label: "Cafe" },
                { value: "Combos", label: "Combos" },
                { value: "Papitas Fritas", label: "Papitas Fritas" },
              ]}
            />
          </Space>
        </div>

        <div className="input_div">
          <input type="text" placeholder="Nueva categoria" id="input_box" />
          <div className="box">
            <label className="custom-file-upload">
              <input
                type="file"
                onChange={handleFileChange}
                id="choose_file"
              />
              {fileName && <p>Selected file: {fileName}</p>} {/* Display file name */}
            </label>
            <Button type="primary" id="crear_btn">
              Crear Categoria
            </Button>
          </div>
        </div>

        <div className="first_page">
          <div className="first_page_header">
            <img
              src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_90,fl_progressive/w_500,f_auto,c_fit/hablis-hotel-chennai/A_Dosa_platter_with_south_indian_sides_kchad7"
              alt="Food"
              width={55}
              height={55}
              id="first_food_img"
            />
            <h4 id="papitas">Papitas Fritas</h4>
            <Button id="editar_btn">Editar</Button>
            <Button id="eliminar_btn">Eliminar</Button>
          </div>
          <div className="card">
            <List
              grid={{
                gutter: 16,
                column: 3,
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card className="first">{item.content}</Card>
                  <Card className="first">{item.content}</Card>
                  <Card className="first">{item.content}</Card>
                  <Card className="first">{item.content}</Card>
                  <Card className="first">{item.content}</Card>
                  <Card className="first">{item.content}</Card>
                  <Card className="first">{item.content}</Card>
                  <Card className="first">{item.content}</Card>
                  
                  
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <FileUpload />
    </div>
  );
};

export default App;
