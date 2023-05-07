import React, { useCallback, useEffect, useRef, useState } from 'react'
import tw from 'tailwind-styled-components'

const Button = tw.button<any>`
  rounded 
  inline-block
  text-white
  py-1 
  px-2 
  bg-blue-500 
  cursor-pointer
  hover:bg-blue-600
  mr-1
  mb-1
`

const DropDownButtonWrapper = tw(Button)`
  inline-block
  relative
`;

const DropDownButton = tw.button<any>`
  peer
`;

  // peer-hover:flex

const DropDownMenu = tw.div<any>`
  hidden
  hover:flex
  mr-1
  p-1
  rounded
  shadow-lg
  absolute
  flex-col
  bg-gray-100
  w-32
  right-0
  text-black
`; 

const DropDownMenuItem = tw.div<any>`
  hover:bg-blue-400
  hover:text-white
  cursor-pointer
  text-left
  rounded
  p-1
`;

const Counter = ({initialCount}:{initialCount:number}) => {
  const [count, setCount] = useState(initialCount)
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);

  const menuRef = useRef();

  useEffect(() => {
    if (menuRef && menuRef.current) {
      const obj = menuRef.current as HTMLDivElement;
      const height = obj.scrollHeight;
      console.log('useEffect[isOpen] height = ' + height);
      setMenuHeight(height);
    } else {
      console.log('menuRef not valid');
    }
  }, [isOpen]);

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
  }

  const restart = () => {
    setCount(0)
  }

  const switchSigns = () => {
    setCount((prev) => prev * -1)
  }

  const onMouseEnter = useCallback(() => {
    console.log('onMouseEnter');
    setIsOpen(true);

    if (menuRef && menuRef.current) {
      const obj = menuRef.current as HTMLDivElement
      const height = obj.scrollHeight
      console.log('scrollHeight = ' + height);
    }
          
  }, [setIsOpen]);

  const onMouseLeave = useCallback( () => {
    console.log('onMouseLeavew');
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div>
      <div className="text-5xl">
        Count:{' '}
        <div data-testid="count" className="text-3xl">
          {count}
        </div>
      </div>
      <div>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={restart}>Restart</Button>
        <Button onClick={switchSigns}>Switch Signs</Button>
        <DropDownButtonWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <DropDownButton onClick={switchSigns}>Switch Signs isOpen:{isOpen?'yes':'no'}</DropDownButton>
          <DropDownMenu ref={menuRef} className={isOpen ? 'flex' : ''}>
            <DropDownMenuItem>Item 1 {menuHeight}</DropDownMenuItem>
            <DropDownMenuItem>Item 2</DropDownMenuItem>
            <DropDownMenuItem>Item 3</DropDownMenuItem>
            <DropDownMenuItem>Item 4</DropDownMenuItem>
            <DropDownMenuItem>Item 5</DropDownMenuItem>
            <DropDownMenuItem>Item 6</DropDownMenuItem>
          </DropDownMenu>
        </DropDownButtonWrapper>
      </div>
    </div>
  )
}

export default Counter
