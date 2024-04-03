const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin w-10 h-10">
        <img
          src="/icons/loading.svg"
          alt="loading"
          className="object-contain w-full"
        />
      </div>
      {/* <h2>Loading...</h2> */}
    </div>
  );
};
export default Loading;