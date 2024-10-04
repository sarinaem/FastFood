


const Loading = ({theme}) => {
    return (
      <div className="flex justify-center items-center m-auto">
          <div className={`w-8 h-8 border-4 border-${theme}-500 border-t-transparent border-solid rounded-full animate-spin`}>
          </div>
      </div>
    )
  }
  
  export default Loading;
  


//   <div className={`spinner-border animate-spin sr-only text-${theme || 'success'}`}>
// sr-only for bootstrap nein tailwind
//   </div>
// </div>