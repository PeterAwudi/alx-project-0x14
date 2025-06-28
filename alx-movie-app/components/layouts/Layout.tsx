const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* You can import Header/Footer here */}
      {children}
    </div>
  );
};

export default Layout;