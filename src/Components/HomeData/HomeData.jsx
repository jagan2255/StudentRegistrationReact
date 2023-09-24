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
            <div className='homebodyData '>
                <div className='container'>
                <div className='row'>

                    <div className='qwerty col col-lg-6'>
                        <Form sendDataBack={CollectDataFromForm} />
                    </div>
                    <div className='qwerty col col-lg-6'>
                        <TableData tablerefresh={dataFromForm} />
                    </div>
                </div>
</div>
            </div>
        </div>
    )
}

export default HomeData