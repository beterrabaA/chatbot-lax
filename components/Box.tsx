const Box = ({ message }: { message: string }) => {
  return (
    <div className="mt-2 flex rounded-s-full rounded-t-full bg-primary-blue p-1 px-5 text-center font-normal">
      {message}
    </div>
  )
}

export default Box
