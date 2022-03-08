import React from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

const ExcelJsonTransFormation = () => {

  const [value, setValue] = React.useState('');
  const [transValue, setTransValue] = React.useState('');
  const [transColumn, setTransColumn] = React.useState('');

  const tranformation = () => {

    // 초기값
    const trans = [];
    let jsonValue = '';
    let jsonColumn = '';
    let lineCnt = 0;

    // 라인 별
    let transLine = value.split("\n");

    // 라인의 탭별
    transLine.forEach((v, i) => {
      trans.push(v.split("\t"))
    })

    // 데이터 값 셋팅

    jsonValue = '[\n';
    trans.forEach((v1, i1) => {
      if (i1 > 0) { // 인데스 1부터 인덱스 0은 컬럼임

        jsonValue += '\t{';
        v1.forEach((v2, i2) => {
          jsonValue += `${trans[0][i2]} : "${v2}",`;

        })
        jsonValue += '},\n';
      }

    })
    jsonValue += ']';

    // 컬럼 값 셋팅

    jsonColumn = '[\n';
    trans[0].forEach((v1, i1) => {

          jsonColumn += '\t{';
          jsonColumn += `\n\t\ttitle : "${v1}", \n\t\tdataIndex : "${v1}", \n\t\tkey : "${v1}",\n`;
          jsonColumn += '\t},\n';

    })
    jsonColumn += ']';

    setTransValue(jsonValue);
    setTransColumn(jsonColumn);
    
  }

  return (
    <>
      <TextArea rows={10} value={value} onChange={(e) => setValue(e.target.value)}>

      </TextArea>
      <Button onClick={tranformation}>변환</Button>
      <br />

      <TextArea rows={20} value={transValue}>
      </TextArea>

      <TextArea rows={20} value={transColumn}>
      </TextArea>


    </>
  );
};

export default ExcelJsonTransFormation;