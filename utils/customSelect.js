export const customStyles1 = {
  control: (base) => ({
    ...base,
    border: "none",
    boxShadow: "none",
    borderRadius: "10px",
    fontSize: "16px",
    padding: "4px 4px",
    cursor: "pointer",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%23121417' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    backgroundSize: "20px 20px",
    paddingRight: "36px",
    width: "221px",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 8px",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#121417",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#8a8a89",
  }),
  indicatorsContainer: () => ({
    display: "none",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: "#fff",
    color: state.isFocused ? "#121417" : "#8a8a89",
    cursor: "pointer",
    padding: "10px 16px",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "10px",
    zIndex: 20,
  }),
};

export const customStyles2 = {
  ...customStyles1,
  control: (base) => ({
    ...customStyles1.control(base),
    width: "198px",
  }),
};

export const customStyles3 = {
  ...customStyles1,
  control: (base) => ({
    ...customStyles1.control(base),
    width: "124px",
  }),
};
