const PageBody = ({ children }) => {
  return (
    <main className="min-h-screen text-green-600 flex flex-col items-center justify-start overflow-x-hidden">
      {children}
    </main>
  );
};

export default PageBody;
