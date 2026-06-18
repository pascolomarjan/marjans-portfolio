export default function Database({size = 24}: {size?: number}) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="20" rx="35" ry="10"
                         fill="none"
                         stroke="currentColor"
                         strokeWidth="4"/>

                <line x1="15" y1="20" x2="15" y2="80"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"/>
                <line x1="85" y1="20" x2="85" y2="80"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"/>

                <path d="M 15,40 C 15,50 85,50 85,40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"/>

                <path d="M 15,60 C 15,70 85,70 85,60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"/>

                <path d="M 15,80 C 15,90 85,90 85,80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"/>
        </svg>

    );
}