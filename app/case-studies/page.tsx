import PortfolioPage, { generateMetadata as getMetadata } from '../portfolio/page'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const generateMetadata = getMetadata

export default PortfolioPage
