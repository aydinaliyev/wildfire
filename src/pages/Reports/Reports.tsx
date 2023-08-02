import MainContainer from 'components/MainContainer'
import AddIcon from '@mui/icons-material/Add'
import Button from 'components/Button'

const Reports = () => {
    return (
        <MainContainer>
            <div className="flex flex-row justify-between pl-[30px] pt-[27px] pb-[30px] pr-[28px]">
                <div className="flex flex-col items-start">
                    <div className="flex flex-row gap-[11px] justify-start items-center">
                        <h3 className="reportsHeader-text-main">Wildfire</h3>
                        <h3 className="reportsHeader-text-main"> (12)</h3>
                    </div>
                    <h6 className="reportsHeader-text-secondary">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin
                    </h6>
                </div>
                <div className="flex items-start pl-40">
                    <Button
                        text={'Add New Report'}
                        startIcon={<AddIcon className="text-white" />}
                    />
                </div>
            </div>
        </MainContainer>
    )
}

export default Reports
