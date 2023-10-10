import React from 'react'
import ComponenteII from './ItemListContainer'
import {Menu, MenuButton, Portal, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const ComponenteI = ({productos, admin , name}) => {
  console.log(productos)
  console.log(admin)


  return (
    <div>

  <Flex>
  <Box>
    <h1>NickClothes INC</h1>
  </Box>
  <Spacer />
  <Box>
  <Menu>
        <MenuButton>Productos</MenuButton>
        <Portal>
          <MenuList>
          <MenuItem>Remeras</MenuItem>
          <MenuItem>Buzos</MenuItem>
          <MenuItem>Pantalones</MenuItem>
          <MenuItem>Calzado</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
  </Box>
  <Spacer />
  <Box>
    <CartWidget/>
  </Box>
  </Flex>
















      {/* <h1>Categorias</h1> */}
      
      {/*  <ul>
        <li><a href=" ">Remeras</a></li>
        <li><a href=" ">Pantalones</a></li>
        <li><a href=" ">Zapattillas</a></li>
      </ul> */}
      {/* <h2> {name} </h2> */}
      {/* <ComponenteI/> */}
      <ComponenteII/>
    </div>
  )
}

export default ComponenteI