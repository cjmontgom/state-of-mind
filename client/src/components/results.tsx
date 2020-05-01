import React, {Fragment, useEffect} from 'react';

const Results = ({checkIns}) => {

    useEffect(() => {}, [checkIns])

    const tableOfCheckIns = (checkIns) => {
        return checkIns.map((checkIn) => {
            return (
                <Fragment>
                    <tr>
                        <td>{checkIn.mood}</td>
                        <td>{checkIn.feeling}</td>
                        <td>{checkIn.comment || ''}</td>
                        <td>timestamp</td>
                    </tr>
                </Fragment>
            )
        })
    };

    return (
        <div>
            Results
            <div>average mood</div>
            <div>number of check ins</div>
            <table>
                <tbody>
                    <tr>
                        <th>Mood</th>
                        <th>Feeling</th>
                        <th>Comment</th>
                        <th>Timestamp</th>
                    </tr>
                    {tableOfCheckIns(checkIns)}
                </tbody>
            </table>
        </div>
    );
};

export default Results



