import { WrapperLoading, LoadingText, Spinner } from "./styled";

const RepoLoading = () => {
    <WrapperLoading>
        <LoadingText>Please wait. projects are being loaded...</LoadingText>
        <Spinner />
    </WrapperLoading>
};

export default RepoLoading;