import React, {Fragment, useEffect} from 'react';
import {Section, SubHeader, Table} from "../styles/styles";

const Insights = ({checkIns, numberOfCheckIns, averageMood}) => {

    useEffect(() => {}, [checkIns])

    const tableOfCheckIns = (checkIns) => {
        return checkIns.map((checkIn) => {
            return (
                <Fragment>
                    <tr>
                        <td>{checkIn.mood}</td>
                        <td>{checkIn.feeling.map( aFeel => `${aFeel}  `)}</td>
                        {/*<td>{typeof checkIn.feeling}</td>*/}
                        <td>{checkIn.comment || ''}</td>
                        <td>timestamp</td>
                    </tr>
                </Fragment>
            )
        })
    };

    return (
        <Section>
            <SubHeader>Insights</SubHeader>
            <div>average mood</div>
            <div>{averageMood}</div>
            <div>number of check ins</div>
            <div>{numberOfCheckIns}</div>
            <Table>
                <thead>
                    <tr>
                        <th>Mood</th>
                        <th>Feelings</th>
                        <th>Comment</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {tableOfCheckIns(checkIns)}
                </tbody>
            </Table>
        </Section>
    );
};

export default Insights



