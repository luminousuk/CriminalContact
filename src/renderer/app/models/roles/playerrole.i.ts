import IRoleConfiguration from './roleconfiguration.i';

export default interface IPlayerRole {
    name: string;
    description: string;
    config?: IRoleConfiguration;
}
