import Link from "next/link"

const FixedButton = ({
  children,
  href = "/",
}: {
  children: React.ReactNode
  href?: string
}) => (
  <Link
    href={href}
    className="transparent fixed top-2 -left-2 z-50 flex items-center justify-center rounded-full p-4 transition duration-300 ease-in-out md:left-10"
  >
    {children}
  </Link>
)

export default FixedButton
