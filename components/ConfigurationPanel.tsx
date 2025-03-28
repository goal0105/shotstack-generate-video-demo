import PlatformSelection from '@components/PlatformSelection';
import ContentDropdown from '@components/ContentDropdown';
import VoiceSelection from '@components/VoiceSelection';
import CreateButton from '@components/CreateButton';
import { VideoStatus } from '@constants/status';
import { VideoConfig } from '@models/config';
import CaptionSelection from './CaptionSelection';
import TextArea from './TextArea';

import React, { useState } from 'react';
import FileUpload from './FileUpload';

type ConfigurationPanelProps = {
  config: VideoConfig;
  setConfig: React.Dispatch<React.SetStateAction<VideoConfig>>;
  onCreate: () => void;
  status: string;
};

function ConfigurationPanel({
  config,
  setConfig,
  onCreate,
  status
}: ConfigurationPanelProps) {
  // const isValid = Object.values(config).every(option => option !== '');
  let isValid = true;
  const isDisabled =
    !isValid ||
    !(
      status === VideoStatus.DONE ||
      status === VideoStatus.FAILED ||
      status === ''
    );

    const [text, setText] = useState('');

    const handleTextChange = (newValue: string) => {
      setText(newValue);
      setConfig({ ...config, videoTitle: newValue});
    };
  
  return (
    // <div className="bg-background h-full p-5 border-r border-gray-300 overflow-y-auto">
      // <PlatformSelection config={config} setConfig={setConfig} />
    //   <ContentDropdown config={config} setConfig={setConfig} />
    //   <VoiceSelection config={config} setConfig={setConfig} />  border-gray-300 
    // </div>

    <div className="bg-background h-screen p-5 border-r border-gray-300 flex items-center justify-center">
      <div className="text-center">
        <p className="text-3xl font-bold mb-4 p-2">Creating Video Demo</p>
        
        <TextArea  
          label="Video Title"
          value={text}
          onChange={handleTextChange}
          placeholder="input the text to display video title"/>      

        {/* <CaptionSelection 
          config={config} //seting caption
          setConfig={setConfig}/> */}

        <FileUpload
         config={config}
         setConfig={setConfig}
        />
          
        <CreateButton onCreate={onCreate} disabled={isDisabled} />

      </div>
    </div>
  );
}
export default ConfigurationPanel;
