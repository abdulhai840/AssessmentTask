import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import critical from '../../assests/critical.png';
import death from '../../assests/death.png';
import recoveries from '../../assests/recoveries.png';
import total from '../../assests/total.png';
import { useSelector } from 'react-redux';
import { Charts } from './Charts';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Dashboard = () => {
    const [loading] = React.useState(false);
    const datasets = useSelector((state) => state?.globalData);

    return (
        <>
            <div className="content pt-5 mx-0">
                <div className=''>
                    <div className='row mx-0'>
                        <div className=' Light mx-1 mt-2'>
                            <h6 className='ml-3 mt-3'>Global Stats</h6>
                            <div className='row mx-2 my-2'>
                                <div className="card mx-2 mt-1" style={{ width: "200px", border: '1px solid #0F74AF', borderRadius: '4px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center"> <img src={total} alt="" width="50" /> </h5>
                                        <h6 className="card-subtitle mt-2 text-center"> {datasets?.tests} </h6>
                                    </div>
                                    <h6 className="card-subtitle bgBlue text-center p-1 m-0 font_16">Total Tests</h6>
                                </div>
                                <div className="card mx-2 mt-1" style={{ width: "200px", border: '1px solid #48A7DF', borderRadius: '4px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center"> <img src={critical} alt="" width="50" /> </h5>
                                        <h6 className="card-subtitle mb-2 text-center"> {datasets?.critical} </h6>
                                    </div>
                                    <h6 className="card-subtitle text-center p-1 m-0 font_16" style={{ backgroundColor: '#48A7DF', color: 'white' }}>Critical</h6>
                                </div>

                                <div className="card mx-2 mt-1" style={{ width: "200px", border: '1px solid #0F74AF', borderRadius: '4px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center"> <img src={recoveries} alt="" width="50" /> </h5>
                                        <h6 className="card-subtitle mt-2 text-center"> {datasets?.recovered} </h6>
                                    </div>
                                    <h6 className="card-subtitle text-center p-1 m-0 font_16" style={{ backgroundColor: 'green', color: 'white' }}>Recoveries</h6>
                                </div>
                                <div className="card mx-2 mt-1" style={{ width: "200px", border: '1px solid #FFB100', borderRadius: '4px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center"> <img src={death} alt="" width="50" /> </h5>
                                        <h6 className="card-subtitle mt-2 text-center">{
                                            loading === true ?
                                                antIcon :
                                                datasets?.deaths}</h6>
                                    </div>
                                    <h6 className="card-subtitle text-center p-1 m-0 font_16" style={{ backgroundColor: 'red', color: 'white' }}>Deaths</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-4'>
                    <Charts />
                </div>
            </div>
        </>
    )
}

export default Dashboard;