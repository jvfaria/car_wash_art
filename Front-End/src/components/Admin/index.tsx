import React from "react";
import "./styles.css";
import carwashlogo from '../../assets/carwash.png';
import {
  Menu,
  Dashboard,
  People,
  DriveEta,
  LocalCarWash,
  AccountCircleOutlined
} from "@material-ui/icons";


const Admin = () => {
  const pageName = "Dashboard"
  return (
    <div id="admin-container">
      <div className="admin-content">
        <aside id="sidebar">
          <div id="sidebar-header">
            <AccountCircleOutlined id="account-logo" />
            <p>
              <Menu id="menu-logo" fontSize="large" />
            </p>
          </div>
          <hr />
          <div id="sidebar-body">
            <ul>
              <div id="sidebar-title">
                <span>Bem vindo! Hugo Santiago</span>
              </div>
              <li>
                <a>Dashboard</a>
                <span>
                  <Dashboard fontSize="small" />
                </span>
              </li>
              <li>
                <a>Clientes</a>
                <span>
                  <People fontSize="small" />
                </span>
              </li>
              <li>
                <a>Veículos</a>
                <span>
                  <DriveEta fontSize="small" />
                </span>
              </li>
              <li>
                <a>Serviços</a>
                <span>
                  <LocalCarWash fontSize="small" />
                </span>
              </li>
            </ul>
          </div>
          <div id="logo-container">
            <img src={carwashlogo} alt="logo" />
          </div>

        </aside>
        <main id="main-content">
          <header id="my-header">
            <h1>Car Wash Art {pageName}</h1>
          </header>
          <hr />
          <article>
            <img src={carwashlogo} alt="logo" />
          </article>
        </main>
      </div>
    </div>
  );
};

export default Admin;
