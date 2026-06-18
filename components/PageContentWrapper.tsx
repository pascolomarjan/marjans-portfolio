export default function PageContentWrapper({children}: { children: React.ReactNode }) {
    return <div className="px-sm-padding-x md:px-md-padding-x pt-8">
        {children}
    </div>
}