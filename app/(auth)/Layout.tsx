const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
        {children}
      </div>
    );
  };
  
  export default Layout;
  