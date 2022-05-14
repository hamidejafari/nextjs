import React from "react";

function VideoInput(props) {

	const { width, height } = props;

	const inputRef = React.useRef();

	const [source, setSource] = React.useState();

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		const url = URL.createObjectURL(file);
		setSource(url);
	};

	const handleChoose = (event) => {
		inputRef.current.click();
	};

	return (
		<div className="VideoInput">
			<input
				ref={inputRef}
				className="VideoInput_input"
				type="file"
				onChange={handleFileChange}
				accept=".mov,.mp4"
			/>
			{
				!source && 
				<button 
					onClick={handleChoose} 
					className={"btnChoose"}
				>
					Choose
				</button>
			}
			{source && (
				<video
					className="VideoInput_video"
					width="100%"
					height={height}
					controls
					src={source}
				/>
			)}
			<div className="VideoInput_footer">
				{source || "Video not selected"}
			</div>
		</div>
	);
}

export default VideoInput;