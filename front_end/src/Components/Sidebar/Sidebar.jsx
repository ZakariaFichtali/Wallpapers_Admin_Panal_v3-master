import { CDBIcon } from 'cdbreact';
import React from 'react';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#161616">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" style={{ marginTop: "12px" }}></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit', fontSize:"22px"  }}>
            <span style={{ color: '#6A4892', fontSize: "22px" }}>ZF</span> Wallpapers.
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="far fa-home">Dashboard</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/wallpapers/4" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Category</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/wallpapers/2" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa-solid fa-image">Wallpapers</CDBSidebarMenuItem>
              
            </NavLink>

          
            <NavLink exact to="/ads" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Manage Ads</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/wallpapers/6" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="credit-card">Subscription</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/Setting" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-cog">Setting</CDBSidebarMenuItem>
            </NavLink>

            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Zakaria Fichtali
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;