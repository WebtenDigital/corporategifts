import { Link } from "@remix-run/react"


type CTAProps={
    title: string
    linkurl: string
}

export default function CTA(props:CTAProps) {
  return (
    <main>
        <Link to={props.linkurl} className="flex items-center gap-1 text-gray-600">
            <p className="capitalize text-sm font-bold lg:text-base">{props.title}</p>
            <div className="rotate-45">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </div>
        </Link>
    </main>
  )
}
