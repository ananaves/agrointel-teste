import { useState, useEffect, useRef } from "react";
import estilo from './chat-IA.module.css'


function ChatIA() {

    // Chave da API do Gemini (lembre-se de substituir pela sua chave real)
    const GEMINI_API_KEY = "AIzaSyC6G9kDzFVxIJaNqe2XKTj0S8Xqb1m_ars";

    // Interface para definir o formato das mensagens
    interface Message {
        role: "user" | "model"; // "user" (usuário) ou "model" (resposta da IA)
        text: string; // Conteúdo da mensagem
    }

    // Componente principal do chat
    const [input, setInput] = useState(""); // Estado para armazenar o texto digitado
    const [messages, setMessages] = useState<Message[]>([]); // Estado para armazenar as mensagens do chat
    const [isLoading, setIsLoading] = useState(false); // Estado para indicar se está carregando uma resposta
    const bottomRef = useRef<HTMLDivElement | null>(null); // Referência para rolar até o final da conversa

    // useEffect para carregar mensagens salvas do localStorage ao iniciar
    useEffect(() => {
        const savedMessages = localStorage.getItem("chat-history");
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    // useEffect para salvar as mensagens no localStorage sempre que elas mudarem
    // Também faz o scroll automático até o final do chat
    useEffect(() => {
        localStorage.setItem("chat-history", JSON.stringify(messages));
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Função para formatar o texto de resposta com HTML
    const formatResponse = (text: string) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Substitui **texto** por <strong>texto</strong>
            .replace(/\*(.*?)/g, "-$1") // Substitui *texto* por -texto (pode ser ajustado conforme a intenção real)
            .split("\n")
            .map((line) => (line.trim() ? `<p>${line}</p>` : "")) // Quebra o texto em linhas e envolve em <p>
            .join(""); // Junta tudo de volta em uma string única
    };

    // Função para enviar a mensagem do usuário e obter resposta do modelo
    const handleSend = async () => {
        if (!input.trim()) return; // Se o input estiver vazio, não faz nada

        const newUserMessage: Message = { role: "user", text: input }; // Cria a nova mensagem do usuário
        const updatedMessages = [...messages, newUserMessage]; // Atualiza o array de mensagens
        setMessages(updatedMessages); // Atualiza o estado
        setInput(""); // Limpa o campo de input
        setIsLoading(true); // Ativa o estado de carregamento

        // Prepara o corpo da requisição para a API do Gemini
        const requestBody = {
            contents: updatedMessages.map((msg) => ({
                role: msg.role,
                parts: [{ text: msg.text }],
            })),
        };

        try {
            // Faz a requisição POST para a API Gemini
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            const data = await response.json(); // Converte a resposta em JSON
            let modelReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Erro ao obter resposta."; // Pega a resposta do modelo
            modelReply = formatResponse(modelReply); // Formata a resposta

            const modelMessage: Message = { role: "model", text: modelReply }; // Cria a nova mensagem do modelo
            setMessages((prev) => [...prev, modelMessage]); // Adiciona ao estado
        } catch (error) {
            console.error("Erro na requisição:", error); // Loga o erro no console
        } finally {
            setIsLoading(false); // Finaliza o carregamento
        }
    };

    // Renderização do componente
    return (
            <div className={estilo.conteinerChat}>
                <div className="chat-box">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.role}`}>
                            <strong>{msg.role === "user" ? "Você" : "Gemini"}:</strong>{" "}
                            <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                        </div>
                    ))}
                    {isLoading && <div className="loading-message">Carregando...</div>}
                    <div ref={bottomRef} /> {/* Elemento invisível para scroll automático */}
                </div>

                <div className="input-box">
                    <input
                        type="text"
                        value={input}
                        placeholder="Digite aqui..."
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()} // Envia ao pressionar Enter
                    />
                    <button onClick={handleSend}>Enviar</button>
                </div>
            </div>
    );
}


export default ChatIA;
