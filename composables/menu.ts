// create a menu composable
const [dropdownMenu, setDropdownMenu] = useToggle(false)

export const useMenu = () => {
  return {
    dropdownMenu,
    setDropdownMenu,
  }
}
