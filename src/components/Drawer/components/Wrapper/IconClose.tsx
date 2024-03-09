import { SVGProps } from 'react'

const IconClose = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      {...props}
    >
      <path
        d="M17.4173 5.87584L16.1248 4.58334L11.0007 9.70751L5.87648 4.58334L4.58398 5.87584L9.70815 11L4.58398 16.1242L5.87648 17.4167L11.0007 12.2925L16.1248 17.4167L17.4173 16.1242L12.2932 11L17.4173 5.87584Z"
        fill={props.fill || '#000'}
      />
    </svg>
  )
}

export default IconClose
