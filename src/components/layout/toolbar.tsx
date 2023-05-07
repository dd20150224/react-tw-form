import Logo from './logo';
import tw from 'tailwind-styled-components';

const Button = tw.button<any>`
  bg-blue-500

  text-white
  px-6
  py-2
  rounded

  text-xs
  font-medium
  uppercase
  
  leading-normal
  inline-block

  shadow
  shadow-[0_4px_9px_-4px_#3b71ca] 
  transition 
  duration-150 
  ease-in-out 

  hover:bg-blue-600 
  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
  
  focus:bg-blue-600 
  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
  focus:outline-none 
  focus:ring-0 
  
  active:bg-blue-700 
  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
`

const Toolbar = () => {
  return (
    <div className="bg-primary p-3 grow-0 flex flex-row justify-between items-center">
      <Logo />
      <Button>Login</Button>
    </div>
  )
}

export default Toolbar;
