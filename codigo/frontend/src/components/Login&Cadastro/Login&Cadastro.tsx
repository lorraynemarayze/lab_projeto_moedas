import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from '@mantine/core';
import "./LoginCadastro.css"


export function AuthenticationForm(props: PaperProps) {
    const [type, toggle] = useToggle(['faça login', 'registre-se']);
    const form = useForm({
        initialValues: {
            email: '',
            nome: '',
            senha: '',
            cpf: '',
            rg: '',
            endereco: '',
            instituicao: '',
            terms: false,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Email invalido'),
            senha: (val) => (val.length <= 6 ? 'Sua senha deve conter no minimo 6 caracteres' : null),
        },
    });

    return (
        <Paper id='Login' radius="md" p="xl" withBorder {...props}>
            <Text size="lg" fw={500}>
                Bem vindo ao Student Coin, {type} com
            </Text>

            <Divider my="lg" />

            <form onSubmit={form.onSubmit(() => { })}>
                <Stack>
                    {type === 'registre-se' && (
                        <TextInput
                            required
                            label="Nome"
                            placeholder="Seu nome"
                            value={form.values.nome}
                            onChange={(event) => form.setFieldValue('nome', event.currentTarget.value)}
                            radius="md"
                        />
                    )}

                    <TextInput
                        required
                        label="Email"
                        placeholder="exemplo@gmail.com"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email && 'Email invalido'}
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Senha"
                        placeholder="Sua senha"
                        value={form.values.senha}
                        onChange={(event) => form.setFieldValue('senha', event.currentTarget.value)}
                        error={form.errors.password && 'Sua senha deve conter no minimo 6 caracteres'}
                        radius="md"
                    />

                    {type === 'registre-se' && (
                        <TextInput
                            required
                            label="Instituição"
                            placeholder="Nome da sua instituição"
                            value={form.values.instituicao}
                            onChange={(event) => form.setFieldValue('instituicao', event.currentTarget.value)}
                            radius="md"
                        />
                    )}

                    {type === 'registre-se' && (
                        <TextInput
                            required
                            label="CPF"
                            placeholder="Numero do seu CPF"
                            value={form.values.cpf}
                            onChange={(event) => form.setFieldValue('cpf', event.currentTarget.value)}
                            radius="md"
                        />
                    )}

                    {type === 'registre-se' && (
                        <TextInput
                            required
                            label="RG"
                            placeholder="Numero do seu RG"
                            value={form.values.rg}
                            onChange={(event) => form.setFieldValue('rg', event.currentTarget.value)}
                            radius="md"
                        />
                    )}


                    {type === 'registre-se' && (
                        <TextInput
                            required
                            label="Endereço"
                            placeholder="Rua, numero, bairro"
                            value={form.values.endereco}
                            onChange={(event) => form.setFieldValue('endereco', event.currentTarget.value)}
                            radius="md"
                        />
                    )}



                </Stack>

                <Group justify="space-between" mt="xl">
                    
                    <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                        {type === 'registre-se'
                            ? 'Já possui uma conta? Faça Login'
                            : "Não possui uma conta? Registre-se"}
                    </Anchor>

                    <Anchor component="button" type="button" c="dimmed" onClick={() => window.location.href = '/login-empresa'} size="xs">
                        Sou empresa
                    </Anchor>


                    <Button type="submit" radius="xl">
                        {upperFirst(type)}
                    </Button>
                </Group>
            </form>
        </Paper>
    );
}