import omnigeoClip from "../../assets/video/omnigeoClip.mp4"

function VideoComponent() {
    return (
        <div>
            <video
                style={{ width: "100%" }}
                src={omnigeoClip}
                autoPlay
                loop
                muted
                alt="Clipe da obra feita pela Omnigeo VDF Engenharia"
            />
        </div>
    );
}

export default VideoComponent;