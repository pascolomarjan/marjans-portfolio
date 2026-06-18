export default function Mortarboard ({size = 24}: {size?: number}) {
    return (
        <svg  width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,40 L50,25 L80,40 L50,55 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>

                <path d="M35,48 V58 C35,63 40,68 50,68 C60,68 65,63 65,58 V48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>

                <path d="M80,40 V55"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"/>
                <circle cx="80" cy="60" r="3" fill="currentColor"/>
        </svg>
    )
}