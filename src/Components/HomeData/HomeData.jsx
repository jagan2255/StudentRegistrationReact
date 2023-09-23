import React, { useState } from 'react'
import "./HomeData.css"
import Form from '../Form/Form'
import TableData from '../TableData/TableData'

function HomeData() {
    const [dataFromForm, setDataFromForm] = useState(1);

    const CollectDataFromForm = (data) => {
        setDataFromForm(dataFromForm + Number(data));
    };

    return (
        <div>
            <div className='homebodyData'>
                <div className='homedata22'>

                    <div>
                        <Form sendDataBack={CollectDataFromForm} />
                    </div>
                    <div>
                        <TableData tablerefresh={dataFromForm} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeData