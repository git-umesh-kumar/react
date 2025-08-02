import useTheme from "../contexts/theme"
export default function ThemeBtn() {

  const {themeMode, lightTheme, darkTheme} = useTheme()
  const onChangeBtn = (e) => {
      const darkModeStatus = e.currentTarget.checked
      if (darkModeStatus) {
          darkTheme()
      } else {
          lightTheme()
      }
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value = ""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode=== "dark"}
      />
      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-400 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:border after:border-gray-300 dark:after:border-gray-600 after:transition-all peer-checked:after:border-white"></div>
      <span>Toggle Theme</span>
    </label>
  );
}
