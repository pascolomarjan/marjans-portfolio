export default function Cloud({size = 24}: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20,70 L 80,70 C 95,70 95,50 85,45 C 80,30 65,25 55,35 C 50,20 30,20 25,35 C 10,40 10,70 20,70 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>

            <polyline points="44,45 37,52 44,59"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>

            <polyline points="60,45 67,52 60,59"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
        </svg>
    )
}