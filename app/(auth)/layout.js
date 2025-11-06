const AuthLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50'>
      <div className='w-full max-w-md space-y-8'>{children}</div>
    </div>
  );
};

export default AuthLayout;
