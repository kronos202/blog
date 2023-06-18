import { Link } from 'react-router-dom'

type DataType = {
    name: string
    link: string
}

type Props = {
    data: DataType[]
}

const BreadCrumbs = ({ data }: Props) => {
    return (
        <div className='flex items-center py-4 overflow-x-auto whitespace-nowrap'>
            {data.map((item, index) => (
                <div key={index} className='text-black opacity-50 text-xs font-roboto md:text-sm'>
                    <Link to={item.link}>{item.name}</Link>
                    {index !== data.length - 1 && <span className='px-3'>/</span>}
                </div>
            ))}
        </div>
    )
}

export default BreadCrumbs