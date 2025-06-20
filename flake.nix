{
  description = "Next.js development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Node.js and package manager
            nodejs_20
            nodePackages.pnpm
            
            # Development tools
            git
            
            # Optional: Add more tools as needed
            # tree-sitter  # for better syntax highlighting
            # ripgrep     # for fast text search
            # fd          # for fast file finding
          ];

          shellHook = ''
            echo "🚀 Next.js development environment loaded!"
            echo "📦 Node.js version: $(node --version)"
            echo "📦 pnpm version: $(pnpm --version)"
            echo ""
            echo "Available commands:"
            echo "  pnpm dev     - Start development server"
            echo "  pnpm build   - Build for production"
            echo "  pnpm start   - Start production server"
            echo "  pnpm lint    - Run linter"
            echo ""
            echo "💡 Tip: Run 'pnpm install' to install dependencies"
          '';

          # Set environment variables
          NIX_ENFORCE_PURITY = 0;
          
          # Optional: Set Node.js environment variables
          NODE_ENV = "development";
        };
      }
    );
} 